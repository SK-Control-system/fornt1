import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

// Simulated viewer data
const viewerData = [
  { time: '15:00', viewers: 120000, engagement: 80000, other: 20000 },
  { time: '18:00', viewers: 140000, engagement: 95000, other: 22000 },
  { time: '21:00', viewers: 164572, engagement: 110000, other: 25000 },
  { time: '00:00', viewers: 150000, engagement: 100000, other: 23000 },
  { time: '03:00', viewers: 130000, engagement: 85000, other: 21000 },
  { time: '06:00', viewers: 110000, engagement: 70000, other: 19000 },
  { time: '09:00', viewers: 125000, engagement: 82000, other: 20000 },
  { time: '12:00', viewers: 145000, engagement: 98000, other: 24000 },
];

// Simulated sentiment data
const sentimentData = [
  { name: 'Positive', value: 60, color: '#2196F3' },
  { name: 'Neutral', value: 30, color: '#4CAF50' },
  { name: 'Negative', value: 10, color: '#FFC107' }
];

// Simulated engagement data
const engagementData = [
  { name: 'Likes', value: 15000 },
  { name: 'Comments', value: 5000 },
  { name: 'Shares', value: 2000 },
];

const keywords = [
  { word: 'Awesome', percentage: 60 },
  { word: 'Great', percentage: 82 },
  { word: 'Amazing', percentage: 73 },
  { word: 'Cool', percentage: 68 },
  { word: 'Fantastic', percentage: 17 },
];

export default function YouTubeAnalytics() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isVideoContainerOpen, setIsVideoContainerOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState('Overview');

  const tabs = ['Overview', 'Analytics', 'Chat', 'Settings', 'Reports', 'Community', 'Content', 'Monetization'];

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', padding: '20px' }}>
      {/* Header Section */}
      <div style={{ 
        backgroundColor: '#FFFFFF', 
        borderBottom: '1px solid #E5E7EB',
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 0'
      }}>
        <h1 style={{ fontSize: '16px', margin: 0 }}>YouTube Live Streaming Preview</h1>
        <button
          onClick={() => setIsVideoContainerOpen(!isVideoContainerOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {isVideoContainerOpen ? '▼' : '▲'}
        </button>
      </div>

      {/* Video Preview */}
      {isVideoContainerOpen && (
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          {[1, 2].map(i => (
            <div key={i} style={{
              width: '240px',
              height: '135px',
              backgroundColor: '#F3F4F6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px'
            }}>
              <div style={{ color: '#6B7280', fontSize: '24px' }}>▶</div>
            </div>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div style={{ 
        display: 'flex', 
        gap: '20px',
        margin: '0',
        padding: '0' 
      }}>
        {/* Left Panel - Chat */}
      <div style={{ 
        width: '260px',        // 280px에서 260px로 수정
        minWidth: '260px',     // 280px에서 260px로 수정
        padding: '0 15px 15px 0',  // 패딩 값 조정
        borderRight: '1px solid #E5E7EB'
        }}>
      <input
        type="text"
        placeholder="Search chat"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
        width: '100%',
        padding: '8px 12px',
        border: '1px solid #E5E7EB',
        borderRadius: '4px',
        marginBottom: '20px',
        fontSize: '14px',
        outline: 'none',
        boxSizing: 'border-box'  // 이 부분 추가
        }}
       />
          
          <h3 style={{ fontSize: '14px', marginBottom: '15px' }}>Real-time Live Chat</h3>
          
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px',
              marginBottom: '15px'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#F3F4F6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px'
              }}>
                U{i + 1}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ height: '8px', backgroundColor: '#F3F4F6', borderRadius: '4px', width: '75%', marginBottom: '4px' }} />
                <div style={{ height: '8px', backgroundColor: '#F3F4F6', borderRadius: '4px', width: '50%' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Right Panel - Stats */}
        <div style={{ flex: 1 }}>
          {/* Viewer Stats */}
          <div style={{ 
            backgroundColor: '#1F2937', 
            borderRadius: '8px',
            marginBottom: '20px',
            border: '1px solid #374151'
          }}>
            <div style={{ padding: '20px' }}>
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '14px', color: '#E5E7EB' }}>총 시청자 수</span>
                  <span style={{
                    backgroundColor: '#DC2626',
                    color: 'white',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '12px'
                  }}>실시간</span>
                </div>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#FFFFFF' }}>
                  {new Intl.NumberFormat('ko-KR').format(164572)} 명
                </div>
              </div>

              <div style={{ height: '300px' }}>
                <ResponsiveContainer>
                  <LineChart data={viewerData}>
                    <XAxis dataKey="time" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#374151', 
                        border: '1px solid #4B5563',
                        color: '#FFFFFF'
                      }}
                      itemStyle={{ color: '#FFFFFF' }}
                      labelStyle={{ color: '#E5E7EB' }}
                    />
                    <Legend wrapperStyle={{ color: '#E5E7EB' }} />
                    <Line 
                      name="viewers" 
                      type="monotone" 
                      dataKey="viewers" 
                      stroke="#3B82F6" 
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line 
                      name="engagement" 
                      type="monotone" 
                      dataKey="engagement" 
                      stroke="#10B981" 
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line 
                      name="other" 
                      type="monotone" 
                      dataKey="other" 
                      stroke="#6B7280" 
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', borderBottom: '1px solid #E5E7EB' }}>
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  style={{
                    padding: '8px 16px',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    borderBottom: selectedTab === tab ? '2px solid #000' : 'none',
                    fontWeight: selectedTab === tab ? 'bold' : 'normal'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Dashboard Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
            {/* Sentiment Analysis */}
            <div style={{ 
              backgroundColor: '#FFFFFF', 
              borderRadius: '8px',
              padding: '20px',
              border: '1px solid #E5E7EB'
            }}>
              <h3 style={{ fontSize: '16px', marginBottom: '15px' }}>Sentiment Analysis</h3>
              <div style={{ height: '200px' }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={sentimentData}
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {sentimentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Engagement Metrics */}
            <div style={{ 
              backgroundColor: '#FFFFFF', 
              borderRadius: '8px',
              padding: '20px',
              border: '1px solid #E5E7EB'
            }}>
              <h3 style={{ fontSize: '16px', marginBottom: '15px' }}>Engagement Metrics</h3>
              <div style={{ height: '200px' }}>
                <ResponsiveContainer>
                  <BarChart data={engagementData}>
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Top Keywords */}
            <div style={{ 
              backgroundColor: '#FFFFFF', 
              borderRadius: '8px',
              padding: '20px',
              border: '1px solid #E5E7EB'
            }}>
              <h3 style={{ fontSize: '16px', marginBottom: '15px' }}>Top Keywords</h3>
              {keywords.map((item, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '10px'
                }}>
                  <span>{item.word}</span>
                  <span style={{ color: '#6B7280' }}>{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}